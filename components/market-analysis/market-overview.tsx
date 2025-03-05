const renderXAxis = ({
    dataKey = "date",
    stroke = "hsl(var(--muted-foreground))",
    tick = { fontSize: isMobile ? 10 : 12 }
  } = {}) => (
    <XAxis
      dataKey="date"
      stroke="hsl(var(--muted-foreground))"
      tick={{ fontSize: isMobile ? 10 : 12 }}
    />
  );

  const renderYAxis = ({
    stroke = "hsl(var(--muted-foreground))",
    tick = { fontSize: isMobile ? 10 : 12 },
    width = isMobile ? 30 : 40
  } = {}) => (
    <YAxis
      stroke="hsl(var(--muted-foreground))"
      tick={{ fontSize: isMobile ? 10 : 12 }}
      width={isMobile ? 30 : 40}
    />
  );