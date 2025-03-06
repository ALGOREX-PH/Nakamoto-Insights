"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SmartContractAudit = () => {
  return (
    <Card className="border-border/40 max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Request Smart Contract Audit</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label>Select Blockchain</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose a blockchain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ethereum">Ethereum</SelectItem>
                <SelectItem value="bsc">BSC</SelectItem>
                <SelectItem value="polygon">Polygon</SelectItem>
                <SelectItem value="solana">Solana</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Smart Contract Address</Label>
            <Input placeholder="Enter contract address" />
          </div>

          <div className="space-y-2">
            <Label>Audit Priority</Label>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <input type="radio" name="priority" id="normal" className="text-primary" />
                <Label htmlFor="normal">Normal</Label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="priority" id="expedited" className="text-primary" />
                <Label htmlFor="expedited">Expedited</Label>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="early-access" />
            <Label htmlFor="early-access">
              I want early access to the audit report
            </Label>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Submit for Audit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SmartContractAudit;