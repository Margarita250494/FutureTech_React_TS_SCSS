import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";


export const useIsMobile = (query: string): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [query]);

  return isMobile;
};

/**
 * @param isActive - if true , adds the no-scroll class, otherwise, removes it
 */

export const useBodyNoScroll = (isActive:boolean) => {
  useEffect(()=>{
    if(isActive){
      document.body.classList.add("no-scroll");
    } else{
      document.body.classList.remove("no-scroll");
    }

    return() => {
      document.body.classList.remove("no-scroll");
    }
  }, [isActive])
}

export const ScrollToTop = () => {
  const location = useLocation(); // Хук для отслеживания текущего маршрута
  useEffect(() => {
    // Прокрутка к верхней части страницы при изменении маршрута
    window.scrollTo(0, 0);
  }, [location]); // Срабатывает при изменении маршрута

  return null; // Этот компонент ничего не отображает
};

// contacts => Form.tsx
type FormState = { success: boolean | null; message: string };

export const useFormSubmit = () => {
  const [state, setState] = useState<FormState>({ success: null, message: "" });
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendForm = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)

    console.log("Event object:", event);
    console.log("Form ref:", formRef.current);

    try{
      const response = await fetch ("https://formsubmit.co/margo250494@gmail.com", {
        method:"POST",
        body: formData
      })
      if(response.ok){
        setState({success:true, message:"Form successfully submitted!"})
        console.log("Form element:", event.currentTarget);
        if (formRef.current) {
          formRef.current.reset(); 
        }
      }
      else{
        setState({success:false, message:"Error sending form."})
      }
    }
    catch (error) {
      console.error("Error sending form: ", error);
      setState({success:false, message:"Error connecting to server."})
    }
  }
  return{ state,sendForm,formRef}
}