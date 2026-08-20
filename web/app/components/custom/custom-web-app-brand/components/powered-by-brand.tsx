type PoweredByBrandProps = {
  webappBrandRemoved?: boolean
  // 以下参数保留但不使用，避免编译报错
  workspaceLogo?: string
  webappLogo?: string
  imgKey?: number
}

const PoweredByBrand = ({ webappBrandRemoved }: PoweredByBrandProps) => {
  if (webappBrandRemoved) return null

  return (
    <>
      <div className="system-2xs-medium-uppercase text-text-tertiary">POWERED BY</div>
      <span className="text-sm font-semibold text-text-secondary">Swire</span>
    </>
  )
}

export default PoweredByBrand
