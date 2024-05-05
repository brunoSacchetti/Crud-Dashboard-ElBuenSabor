import { CCollapse, CContainer, CNavLink, CNavbar, CNavbarBrand, CNavbarNav } from "@coreui/react"
import "./NavBarC.module.css"

export const NavBarC = () => {
  return (
  <>
    <CNavbar expand="lg" className="navbar-custom-color" style={{background: '#f09e2f'}}>
      <CContainer fluid>
        <CNavbarBrand href="/">El Buen Sabor</CNavbarBrand>
        <CCollapse className="navbar-collapse">
          <CNavbarNav as="nav">
            <CNavLink href="/" active>
              Home
            </CNavLink>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  </>

  )
}
