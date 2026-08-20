import { useTranslation } from 'react-i18next'

type BrandingFooterProps = {
  removeWebappBrand?: boolean
  replaceWebappLogo?: string | null
}

const BrandingFooter = ({ removeWebappBrand }: BrandingFooterProps) => {
  const { t } = useTranslation()

  if (removeWebappBrand) return null

  return (
    <div className="flex flex-row-reverse px-2 py-3">
      <div className="flex shrink-0 items-center gap-1.5 px-1">
        <div className="system-2xs-medium-uppercase text-text-tertiary">
          {t(($) => $['chat.poweredBy'], { ns: 'share' })}
        </div>
        <span className="text-sm font-semibold text-text-secondary">Swire</span>
      </div>
    </div>
  )
}

export default BrandingFooter
