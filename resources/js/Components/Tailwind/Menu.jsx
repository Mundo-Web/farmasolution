import React from "react"



const MenuSimple = React.lazy(() => import('./Menu/MenuSimple'))
const MenuBananaLab = React.lazy(() => import('./Menu/MenuBananaLab'))
const MenuExpertFarma = React.lazy(() => import('./Menu/MenuExpertFarma'))
const Menu = ({ data, which, items, generals = [], cart, setCart, pages }) => {
  const getMenu = () => {
    switch (which) {

      case 'MenuSimple':
        return <MenuSimple data={data} items={items} cart={cart} setCart={setCart} pages={pages} />
        case 'MenuBananaLab':
          return <MenuBananaLab data={data} items={items} cart={cart} setCart={setCart} pages={pages} />
      
      case 'MenuExpertFarma':
        return <MenuExpertFarma data={data} items={items} cart={cart} setCart={setCart} pages={pages} generals={generals} />
      
          default:
        return <div className="w-full px-[5%] replace-max-w-here p-4 mx-auto">- No Hay componente <b>{which}</b> -</div>
    }
  }
  return getMenu()
}

export default Menu;