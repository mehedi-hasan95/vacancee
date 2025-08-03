"use client";
import { AccrodionModify } from "@/components/modify/accrodion-modify";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";

const salaryData = [
  { range: "$80k", height: 60 },
  { range: "$90k", height: 80 },
  { range: "$100k", height: 45 },
  { range: "$110k", height: 90 },
  { range: "$120k", height: 70 },
  { range: "$130k", height: 85 },
  { range: "$140k", height: 40 },
  { range: "$150k", height: 65 },
  { range: "$160k", height: 55 },
  { range: "$170k", height: 75 },
  { range: "$180k", height: 50 },
  { range: "$190k", height: 35 },
  { range: "$200k", height: 60 },
  { range: "$210k", height: 45 },
  { range: "$220k", height: 70 },
  { range: "$230k", height: 40 },
  { range: "$240k", height: 55 },
  { range: "$250k", height: 80 },
  { range: "$260k", height: 45 },
  { range: "$270k", height: 35 },
  { range: "$280k", height: 50 },
  { range: "$290k", height: 40 },
  { range: "$300k", height: 60 },
];
export const PriceSlider = () => {
  const [priceRange, setPriceRange] = useState([200, 800]);
  const absoluteMin = 0;
  const absoluteMax = 2000;

  const handleSliderChange = (value: number[]) => {
    setPriceRange(value);
  };
  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value) || 0;
    const clampedValue = Math.min(Math.max(value, absoluteMin), priceRange[1]);
    setPriceRange([clampedValue, priceRange[1]]);
  };
  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value) || 0;
    const clampedValue = Math.min(Math.max(value, priceRange[0]), absoluteMax);
    setPriceRange([priceRange[0], clampedValue]);
  };
  return (
    <AccrodionModify title="Salary Range">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-end justify-center h-32 gap-1">
            {salaryData.map((item, index) => (
              <div
                key={index}
                className="bg-blue-500 w-2 rounded-t"
                style={{ height: `${item.height}%` }}
              />
            ))}
          </div>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={handleSliderChange}
              max={absoluteMax}
              min={absoluteMin}
              step={10}
              className="w-full"
            />

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Min {formatPrice(absoluteMin)}</span>
              <span>Max {formatPrice(absoluteMax)}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="min-price-input" className="text-sm font-medium">
                Minimum Price
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <Input
                  id="min-price-input"
                  type="number"
                  value={priceRange[0]}
                  onChange={handleMinInputChange}
                  min={absoluteMin}
                  max={priceRange[1]}
                  step={10}
                  className="pl-8"
                  placeholder="Min price"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="max-price-input" className="text-sm font-medium">
                Maximum Price
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <Input
                  id="max-price-input"
                  type="number"
                  value={priceRange[1]}
                  onChange={handleMaxInputChange}
                  min={priceRange[0]}
                  max={absoluteMax}
                  step={10}
                  className="pl-8"
                  placeholder="Max price"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>
              Min
              <br />
              $80k
            </span>
            <span>
              Max
              <br />
              $300k
            </span>
          </div>
        </div>
      </div>
    </AccrodionModify>
  );
};
