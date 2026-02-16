import { useEffect ,useReducer} from "react";
import { applicationsData } from "../data/applicationsData";
import { ApplicationContext } from "./ApplicationContext";

export const ApplicationProvider = ({children}) => {

    const storedData = localStorage.getItem("applications");

    const initialState = {
        applications: storedData ? JSON.parse(storedData) : applicationsData
    };

    function applicationReducer(state, action) {
        switch (action.type) {
            case "ADD_APPLICATION":
            return {
                ...state,
                applications: [...state.applications, action.payload],
            };

            case "EDIT_APPLICATION":
            return {
                ...state,
                applications: state.applications.map(app =>
                    app.id === action.payload.id ? action.payload : app
                ),
            };

            case "DELETE_APPLICATION":
            return {
                ...state,
                applications: state.applications.filter(
                    app => app.id !== action.payload
                ),
            };

            default:
                return state;
        }
    }

      const [state, dispatch] = useReducer(applicationReducer, initialState);

    const sortedApplications = [...state.applications].sort((a, b) => new Date(b.dateApplied) - new Date(a.dateApplied));

    const statusCounts = state.applications.reduce((acc, app) => {
        acc[app.status] = (acc[app.status] || 0) + 1;
        return acc;
    }, {});


    const addApplication = (application) => {
        const newApplication = {
            id: state.applications.length
                ? Math.max(...state.applications.map(a => a.id)) + 1
                : 1,
            ...application
        };

        dispatch({ type: "ADD_APPLICATION", payload: newApplication });
    };

    const editApplication = (updatedApplication) => {
        dispatch({ type: "EDIT_APPLICATION", payload: updatedApplication });
    };

    const deleteApplication = (id) => {
        dispatch({ type: "DELETE_APPLICATION", payload: id });
    }
    
    useEffect(() => {
        localStorage.setItem('applications', JSON.stringify(state.applications));
    }, [state.applications]);

    return (
        <ApplicationContext.Provider value={{
            applications: state.applications,
            addApplication,
            editApplication,
            deleteApplication,
            sortedApplications,
            statusCounts
        }}>
            {children}
        </ApplicationContext.Provider>
    )
};