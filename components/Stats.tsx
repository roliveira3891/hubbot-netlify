const stats = [
  { value: "até 70%", label: "Redução no custo de atendimento" },
  { value: "24/7", label: "Atendimento sem plantão nem hora extra" },
  { value: "até 70%", label: "Demandas resolvidas pela IA sem humano" },
  { value: "< 1 min", label: "Tempo de primeira resposta" },
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
