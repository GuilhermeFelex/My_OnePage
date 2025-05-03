import type * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  dataPoints: { text: string; icon: LucideIcon }[];
}

export function ServiceCard({ icon: Icon, title, description, dataPoints }: ServiceCardProps) {
  return (
    <Card className="w-full max-w-md bg-card text-card-foreground shadow-lg rounded-lg">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Icon className="h-8 w-8 text-primary" />
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 text-muted-foreground">{description}</CardDescription>
        <div className="space-y-2">
          {dataPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-2">
                <point.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <p className="text-sm">{point.text}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
