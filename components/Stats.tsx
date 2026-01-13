const stats = [
  { value: "10M+", label: "Mensagens processadas" },
  { value: "5.000+", label: "Empresas ativas" },
  { value: "99.9%", label: "Uptime garantido" },
  { value: "< 1s", label: "Tempo de resposta" },
];

const Stats = () => {
  return (
    <section className="py-20 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
