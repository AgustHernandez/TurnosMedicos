import { CompassOutlined } from "@ant-design/icons";
import { createContext, useContext, useState, useEffect} from "react";

const ContextGlobal = createContext([]);

export const useGlobalContext = () => useContext(ContextGlobal)


function ContextProvider({ children }) {  
    const [isLoggedIn, setisLoggedIn,] = useState(false);

    const [data, setData] = useState([]);

    const [legajo, setLegajo] = useState("");
    const [fechaSeleccionada, setFechaSeleccionada] = useState("");

    const fetchInfo = () => {
        console.log(`Obteniendo turnos para ${legajo}`);
        console.log(fechaSeleccionada);
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
        .then((s) => {setData(s)})
        .catch((error) => {
          console.error('Error en la solicitud:', error);
        });
    }
    };

    const changeFecha = (fecha) => {
      setFechaSeleccionada(fecha);
    }

    useEffect(() => {
        fetchInfo();
    }, [legajo, fechaSeleccionada]);

    const [codTurno, setCodTurno] = useState("")
    const [enviado, setEnviado] = useState(false)
    const [confirmacionTurno, setConfirmacionTurno] = useState({})

    const guardarTurno = (codTurno) => {
      fetch(`http://localhost:8080/api/especialistas/${legajo}/turnos/${codTurno}`, getRequestOptions('POST'))
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
      .then((s) => {
        setEnviado(s.fecha != undefined);
        setConfirmacionTurno(s);
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
      });
      fetchInfo()
  }

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

    const logOut = () => {
        localStorage.setItem('jwtToken', '')
    }

    return (
        <ContextGlobal.Provider value={{getRequestOptions,guardarTurno, setLegajo, changeFecha, data, setData, legajo, fechaSeleccionada, codTurno, logOut, enviado,confirmacionTurno}}>
            {children}
        </ContextGlobal.Provider>
    );
};

export default ContextProvider;