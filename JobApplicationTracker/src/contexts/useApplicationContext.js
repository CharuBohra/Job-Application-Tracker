import { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";

export const useApplicationContext = () => {
    return useContext(ApplicationContext);
}