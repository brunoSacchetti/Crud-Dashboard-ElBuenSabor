import { cilCloudDownload, cilLayers, cilPuzzle, cilSpeedometer } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CBadge, CNavGroup, CNavItem, CNavTitle, CSidebar, CSidebarHeader, CSidebarNav, CSidebarToggler } from '@coreui/react'
import styles from './SideBar.module.css'

export const SideBar = () => {
  return (
    <CSidebar className={styles.SideBarBig} style={{background:'#efefef'}}>
      <CSidebarNav>
        <CNavTitle>Dashboard</CNavTitle>
        <CNavItem href="/">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Inicio
        </CNavItem>
        <CNavItem href="/empresas">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Empresa
          
        </CNavItem>
        <CNavItem href="/productos">
          <CIcon customClassName="nav-icon" icon={cilCloudDownload} /> Productos
        </CNavItem>
        <CNavItem href="/promociones">
          <CIcon customClassName="nav-icon" icon={cilCloudDownload} /> Promociones
          <CBadge color=" ms-auto" style={{background:'#f09e2f'}}>NEW</CBadge>
        </CNavItem>
        <CNavItem href="/usuarios">
          <CIcon customClassName="nav-icon" icon={cilCloudDownload} /> Usuarios
        </CNavItem>
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Categorias
            </>
          }
        >
          <CNavItem href="#">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{' '}
            Subcategoria 1
          </CNavItem>
          <CNavItem href="#">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{' '}
            Subcategoria 2
          </CNavItem>
        </CNavGroup>
        <CNavItem href="/insumos">
          <CIcon customClassName="nav-icon" icon={cilLayers} /> Insumos
        </CNavItem>
      </CSidebarNav>
      <CSidebarHeader className="border-top">
        <CSidebarToggler />
      </CSidebarHeader>
      <CSidebarHeader className="border-bottom"/> {/* Arreglar */}
    </CSidebar>
  );
};