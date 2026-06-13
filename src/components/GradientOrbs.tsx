export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="orb orb-1" style={{ top: '-10%', left: '-5%' }} />
      <div className="orb orb-2" style={{ top: '30%', right: '-10%' }} />
      <div className="orb orb-3" style={{ bottom: '-5%', left: '20%' }} />
    </div>
  )
}
