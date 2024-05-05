import { CCollapse, CContainer, CNavLink, CNavbar, CNavbarBrand, CNavbarNav } from "@coreui/react"


export const NavBarC = () => {
  return (
  <>
    <CNavbar expand="lg" className="bg-primary" >
      <CContainer fluid>
        <CNavbarBrand href="#">El Buen Sabor</CNavbarBrand>
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
