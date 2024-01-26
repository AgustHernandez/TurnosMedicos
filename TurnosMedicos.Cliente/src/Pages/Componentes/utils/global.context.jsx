import { createContext, useContext, useState, useEffect} from "react";

const ContextGlobal = createContext([]);

export const useGlobalContext = () => useContext(ContextGlobal)


function ContextProvider({ children }) {  
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const [data, setData] = useState([]);

    const [legajo, setLegajo] = useState("");
    const [fechaSeleccionada, setFechaSeleccionada] = useState("");

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

    const changeFecha = (fecha) => setFechaSeleccionada(fecha);

    useEffect(() => {
        fetchInfo();
    }, [legajo, fechaSeleccionada]);

    const [codTurno, setCodTurno] = useState("")

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

    const fetchInfoLegajo = () => {
        /*const url = "http://localhost:8080/api/especialistas";
        fetch(url)
            .then((res) => res.json())
            .then((s) => {
                setData(s.map(function (elemento) {
                return {
                    value: elemento.legajo,
                    label: elemento.apellido + ', ' + elemento.nombre
                };
                }))
            })*/
        }

    useEffect(() => {
        fetchInfoLegajo();
    }, [legajo]);

    return (
        <ContextGlobal.Provider value={{getRequestOptions,guardarTurno, setLegajo, changeFecha, data, setData, legajo, fechaSeleccionada, codTurno, logOut}}>
            {children}
        </ContextGlobal.Provider>
    );
};

export default ContextProvider;