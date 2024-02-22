import { useEffect, useState } from 'react';
import { MENU_API_URL } from './constants';

const useRestaurantMenu = (resId) => {
    const [menuList, setMenuList] = useState(null);

    useEffect(() => {
        fetchRestaurantMenu();
    }, [])

    const fetchRestaurantMenu = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setMenuList(json.data);
    }

    return menuList;
}

export default useRestaurantMenu;