import { BookOpen, Users, TrendingUp, Sparkles } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    { icon: BookOpen, label: "Articles Published", value: "50+" },
    { icon: Users, label: "Active Readers", value: "10K+" },
    { icon: TrendingUp, label: "Monthly Views", value: "100K+" },
    { icon: Sparkles, label: "AI Topics Covered", value: "25+" },
  ];

  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
