import NetInfo from "@react-native-community/netinfo"
import { useEffect } from "react";

function useNet() {
    const [netInfo, setNetInfo] = useState(null);
    function handleChangeNet(netInfo) {
        setNetInfo(netInfo);
    }

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(handleChangeNet);
        return () => {
            unsubscribe(handleChangeNet);
        };
    }, []);

    return netInfo;
}

export default useNet;
