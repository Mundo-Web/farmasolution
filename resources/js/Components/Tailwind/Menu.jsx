import React from "react"



const MenuSimple = React.lazy(() => import('./Menu/MenuSimple'))
const MenuBananaLab = React.lazy(() => import('./Menu/MenuBananaLab'))
const MenuExpertFarma = React.lazy(() => import('./Menu/MenuExpertFarma'))
const MenuCategories = React.lazy(() => import('./Menu/MenuCategories'))
const Menu = ({ data, which, items, generals = [], cart, setCart, pages }) => {
  const getMenu = () => {
    switch (which) {

      case 'MenuSimple':
        return <MenuSimple data={data} items={items} cart={cart} setCart={setCart} pages={pages} />
        case 'MenuBananaLab':
          return <MenuBananaLab data={data} items={items} cart={cart} setCart={setCart} pages={pages} />
      
      case 'MenuExpertFarma':
        return <MenuExpertFarma data={data} items={items} cart={cart} setCart={setCart} pages={pages} generals={generals} />
      case 'MenuCategories':
        return <MenuCategories data={data} items={items} pages={pages} visible={data?.showCategories} />
    
          default:
        return <div className="w-full px-[5%] replace-max-w-here p-4 mx-auto">- No Hay componente <b>{which}</b> -</div>
    }
  }
  return getMenu()
}

export default Menu;