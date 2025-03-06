"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const GovernancePanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Governance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2">Active Proposal</h4>
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="text-sm font-medium mb-2">NIP-23: Forum Upgrade</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-green-500">Yes: 65%</span>
                  <span className="text-red-500">No: 35%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Ends in 2 days
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Recent Proposals</h4>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium">NIP-22: Reputation System</div>
                <div className="text-xs text-green-500">Passed with 78% votes</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">NIP-21: Mobile App</div>
                <div className="text-xs text-red-500">Failed with 45% votes</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GovernancePanel;