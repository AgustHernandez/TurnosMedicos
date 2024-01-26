import { createContext, useContext, useState, useEffect} from "react";

const ContextGlobal = createContext([]);

export const useGlobalContext = () => useContext(ContextGlobal)

/*const getFechaFromStorage = () => {
    const localData = localStorage.getItem("fecha");
    return localData ? JSON.parse(localData) : [];
    };

const setFechaInStorage = (fecha) =>
    localStorage.setItem("fecha", JSON.stringify(fecha));*/

function ContextProvider({ children }) {  
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const guardarTurno = (codTurno) => {
        fetch(`http://localhost:8080/api/turnos/${codTurno}`, getRequestOptions('POST'))
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            if (res.status === 401 || res.status === 403) {
              navigate("/login");
            } else {
              throw new Error('Error en la solicitud: ' + res.statusText);
            }
          }
        })
        .then((s) => console.log(s))
        .catch((error) => {
          console.error('Error en la solicitud:', error);
        });
    }

    const fetchInfo = () => {
        console.log(`Obteniendo turnos para ${legajo}`)
        if(legajo != "" && fechaSeleccionada != ""){
        fetch(`http://localhost:8080/api/especialistas/${legajo}/turnos?fecha=${fechaSeleccionada}`.replace("\"", "").replace("\"", ""), getRequestOptions('GET'))
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            if (res.status === 401 || res.status === 403) {
              navigate("/login");
            } else {
              throw new Error('Error en la solicitud: ' + res.statusText);
            }
          }
        })
        .then((s) => setData(s))
        .catch((error) => {
          console.error('Error en la solicitud:', error);
        });
    }
    };

    const getRequestOptions = (method) =>{
        const token = localStorage.getItem('jwtToken') || "";
        var myHeaders = new Headers();
        if(token != ""){
            myHeaders.append("Authorization", "Bearer "+token);
        }

        var requestOptions = {
          method: method,
          headers: myHeaders,
          redirect: 'follow'
        };

        return requestOptions;
      }

    /*const [fechaSeleccionada, setFechaSeleccionada] = useState(getFechaFromStorage());

    useEffect(() => {
        setFechaInStorage(fecha);
        }, [fecha]);*/

    const changeFecha = (fecha) => setFechaSeleccionada(fecha);

    const [data, setData] = useState([]);

    const [legajo, setLegajo] = useState("");
    const [fechaSeleccionada, setFechaSeleccionada] = useState("");

    useEffect(() => {
        fetchInfo();
    }, [legajo, fechaSeleccionada]);

    return (
        <ContextGlobal.Provider value={{getRequestOptions,guardarTurno, setLegajo, changeFecha, data, legajo, fechaSeleccionada}}>
            {children}
        </ContextGlobal.Provider>
    );
};

export default ContextProvider;