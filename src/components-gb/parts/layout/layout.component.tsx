import * as React from "react"
import { Footer } from "../footer/footer.component"
import "./layout.css"
import { LayoutProps } from "./layout.types"
import { SubFooter } from "../subFooter/subFooter.component"
import { EventTheme } from "../../../enums-gb"
import { Header } from "../header/header.component"
import { LinkData } from "../../../interfaces"

export const Layout: React.FC<LayoutProps> = (
  props: LayoutProps
): JSX.Element => {
  const {
    className,
    children,
    data,
    eventTheme = EventTheme.Transgraniczny,
    isMainPage = false,
  }: LayoutProps = props
  const { logo } = data || {}
  const { partners } = data || {}
  const links: LinkData[] = [
    { text: "Home", to: "/", icon: "home" },
    { text: "Zapisy", to: "/zapisy", icon: "registration" },
    { text: "Lista Startowa", to: "/lista-startowa", icon: "list" },
    { text: "Regulamin", to: "/regulamin", icon: "rules" },
    { text: "Kontakt", to: "/kontakt", icon: "contact" },
  ]

  return (
    <>
      <div
        className={className}
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {!isMainPage && (
          <Header logo={logo} eventTheme={eventTheme} links={links} />
        )}
        <main
          style={{ display: "flex", flexDirection: "column", flexGrow: "1" }}
        >
          {children}
        </main>
        {!isMainPage && <SubFooter eventTheme={eventTheme} links={links} />}
        {partners && <Footer data={partners} margin={0} />}
      </div>
    </>
  )
}
