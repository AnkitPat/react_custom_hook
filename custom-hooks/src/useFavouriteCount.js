import { useState } from 'react';
function useFavouriteCountHook() {
    const [favouriteCount, setFavouriteCount] = useState({ count: 0 });

    const increaseFavouriteCount = () => {
        setFavouriteCount({ count: favouriteCount.count + 1 })
    }

    const decreaseFavouriteCount = () => {
        setFavouriteCount({ count: favouriteCount.count - 1 })
    }
    return { favouriteCount, increaseFavouriteCount, decreaseFavouriteCount };
}
export default useFavouriteCountHook;