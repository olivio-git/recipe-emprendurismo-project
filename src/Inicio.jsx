import { H1 } from "./components/H1";
import { H1subtitle } from "./components/H1subtitle";
import { H2 } from "./components/H2";
import Imagen from "./components/Imagen";
import { P } from "./components/P";
import { Pnotable } from "./components/Pnotable";
import { PnotableTwo } from "./components/PnotableTwo";
const data = {
  title: "Actividad académica final. 💻",
  subtituloOne: "Primera parte",
  l1: `Desarrollo, despliegue y administración de aplicaciones web en la nube ☁️.`,
  l2: "Almacenamiento y administración de archivos. 📁",
  l3: "Agencia de servicios de desarrollo web a medida, para sistemas de gestión y plataformas ECOMMERCE, etc. 🛒",
  l4: "Plataforma para la oferta y demanda de empleos. 👷",
  subtituloTwo: "Segunda parte",
  subtituloThree: "Tercera parte",
};
export const Inicio = () => {
  return (
    <>
      <div
        className="h-[90vh] w-full
	  dark:bg-gradient-to-r bg-gradient-to-r
	  dark:from-purple-900 from-[#1E1C48]
	  dark:via-gray-800 via-gray-800
	  dark:to-[#312152] to-[#312152]
	  flex items-center justify-center rounded-tl-[70%] rounded-bl-[70%] rounded-tr-[70%] rounded-br-[70%]
	  z-99 absolute blur-3xl"
      ></div>
      <div className="w-full flex flex-col justify-center items-center pt-10">
        <div
          className="flex w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-20 z-50 items-center justify-center
		  border-white"
        >
          <H1 client:only text={data.title} />
        </div>
        <section className="flex flex-col w-[90%] sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[80%] h-20 z-50 pt-2 gap-2 text-zinc-400 mb-10">
          <div
            className="w-full flex flex-col items-center justify-center border-gray-600
            p-2 rounded-xl"
          >
            <h1 className="font-bold text-2xl">Finger Job</h1>
            <Imagen client:only></Imagen>
          </div> 
          <div
            className="w-full border-[0.2px] border-gray-600
	          bg-white bg-opacity-5 p-2 rounded-xl"
          >
            <H1subtitle text={data.subtituloOne} />
            <H2
              text={
                "1.	Generar una lluvia de ideas por lo menos dos por participante"
              }
            />
            <ul className="ml-5 list-disc list-inside text-zinc-400 font-light text-lg flex flex-col gap-2 mb-2">
              <li className="mb-2">{data.l1}</li>
              <li className="mb-2">{data.l2}</li>
              <li className="mb-2">{data.l3}</li>
              <li className="mb-2">{data.l4}</li>
            </ul>
          </div>
          <div
            className="w-full border-[0.2px] border-gray-600
	          bg-white bg-opacity-5 p-2 rounded-xl"
          >
            <H2
              text={
                "2.	De todas las ideas de negocio generadas seleccionar una, la que mejor consideren de manera democrática en el grupo."
              }
            />
            <P
              text={
                "Plataforma para la oferta y demanda de empleos en el sector."
              }
            />
          </div>
          <div
            className="w-full border-[0.2px] border-gray-600
	          bg-white bg-opacity-5 p-2 rounded-xl"
          >
            <H2
              client:only
              text={
                "3.	Investiga sobre los requisitos para poder implementar esa idea de negocio (Renta, Patente municipal, Senasag, Sedes, Licencia ambientales u otros)"
              }
            />
            <P
              client:only
              text={
                "Registro de la empresa ante el Registro de comercio, para obtener la autorización de(funcionamiento)."
              }
            />
            <P text={"Documento único de funcionamiento (DUI)."} />
            <P
              client:only
              text={
                "Número de identificación tributaria (NIT), y cumplir con los pagos de los derechos correspondientes."
              }
            />
            <P
              client:only
              text={
                "Patente de la empresa, solicitar la patente ante el ministerio de desarrollo productivo y economía pública"
              }
            />
            <P
              client:only
              text={
                "Rentas, pagar por la infraestructura de servidores, servicios básicos, proveedor de servicios de internet (ISP)."
              }
            />
            <P
              client:only
              text={
                "Cumplir con los requisitos de SEPREC, como cualquier startup de tecnología."
              }
            />
          </div>
          <div
            className="w-full border-[0.2px] border-gray-600
	  bg-white bg-opacity-5 p-2 rounded-xl"
          >
            <H1subtitle client:only text={"Segunda parte"} />
            <H2
              client:only
              text={
                "4.	Explica y fundamenta claramente la necesidad que están pretendiendo llegar a satisfacer en el mercado."
              }
            />
            <Pnotable
              client:only
              text={
                "Ni los trabajadores ni los empleadores tienen un lugar concreto donde ofrecer o buscar servicios laborales, lo que resulta en una dispersión de las ofertas y una falta de eficiencia en el proceso. Esta falta de centralización contribuye a la creciente ineficiencia del método actual. Además, la confianza en adquirir servicios mediante recomendaciones de terceros es baja."
              }
            />
            <H2 client:only text={"Organizar el equipo por roles:"} />

            <img
              src="https://i.ibb.co/KDtTDsk/Mapa-conceptual.png"
              alt="organigrama de roles"
            />
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    {" "}
                    Nombre{" "}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {" "}
                    Cargo{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 cursor-pointer dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://i.ibb.co/kMMS0nM/20eef0e708bb.jpg"
                      alt="Jese image"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        Olivio Subelza Cabezas
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4"> CEO/Chief Executive Officer </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://i.ibb.co/kMMS0nM/20eef0e708bb.jpg"
                      alt="Jese image"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        Olivio Subelza Cabezas
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4"> CTO/Chief Technology Officer </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://i.ibb.co/kMMS0nM/20eef0e708bb.jpg"
                      alt="Jese image"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        Olivio Subelza Cabezas
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4"> CRO/Chief Revenue Officer </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://i.ibb.co/kMMS0nM/20eef0e708bb.jpg"
                      alt="Jese image"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        Olivio Subelza Cabezas
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4"> Equipo de soporte al cliente </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="bg-white bg-opacity-5 p-2 rounded-xl h-96
	  dark:bg-gradient-to-r bg-gradient-to-r
	  dark:from-purple-900 from-[#1E1C48]
	  dark:via-gray-800 via-gray-800
	  dark:to-[#312152] to-[#312152]
	  blur z-98 relative rounded-tl-[70%] rounded-bl-[70%] rounded-tr-[70%] rounded-br-[70%]"
          ></div>
          <div
            className="w-full border-[0.2px] border-gray-600
	  bg-white bg-opacity-5 p-2 rounded-xl"
          >
            <H2
              client:only
              text={
                "5.	Desarrollar, explicar e identificar claramente la idea de negocio a implementar como emprendimiento, escoger un líder y conformar el equipo con responsabilidades claras para todos los miembros."
              }
            />
            <PnotableTwo
              client:only
              text={
                "En un mundo donde la omnipresencia de la tecnología ha transformado la manera en la cual interactuamos, nuestra propuesta se erige como un faro de innovación y conexión humana."
              }
            />
            <P
              client:only
              text={
                "Imaginamos una aplicación móvil que redefine el proceso de búsqueda y oferta de empleos, con un enfoque centrado en simplificar y agilizar esta experiencia tanto para empleadores como para trabajadores."
              }
            />
            <P
              client:only
              text={
                "Con nuestra aplicación, los usuarios podrán crear perfiles detallados utilizando sus cuentas de Facebook, Google o correo electrónico. Estos perfiles servirán como un escaparate virtual de habilidades y experiencias, permitiendo una conexión directa entre aquellos que buscan talento y aquellos que lo ofrecen."
              }
            />
            <P
              client:only
              text={
                "La esencia de nuestra plataforma reside en la capacidad de facilitar la comunicación entre empleadores y trabajadores a través de un sistema de chat integrado. Esto no solo agilizará la discusión de los detalles del trabajo, sino que también fomentará un sentido de comunidad y colaboración."
              }
            />
            <P
              client:only
              text={
                "Una de las características más destacadas de nuestra aplicación será la posibilidad de evaluar y calificar a los usuarios mediante un sistema transparente de calificación por estrellas ⭐⭐⭐⭐⭐. Esto no solo proporcionará una medida objetiva de la calidad del trabajo realizado, sino que también fomentará la responsabilidad y la excelencia en la conducta profesional de todos los involucrados."
              }
            />
            <P
              client:only
              text={
                "Además, implementaremos un filtro por edad para garantizar el cumplimiento de las regulaciones legales y la seguridad de todos los usuarios. Solo aquellos mayores de 18 años podrán registrarse y participar en nuestra plataforma, asegurando un entorno legalmente apto para el trabajo y la contratación."
              }
            />
            <P
              client:only
              text={
                "Ofreceremos dos tipos de cuentas: estándar y premium. Las cuentas premium disfrutarán de funciones adicionales y un mayor alcance para llegar a una audiencia más amplia. Esto incluirá la capacidad de resaltar publicaciones y acceder a funciones avanzadas de búsqueda de empleo, brindando así una experiencia más personalizada y efectiva."
              }
            />
            <P
              client:only
              text={
                "Además, contemplamos la implementación de filtros de búsqueda por ubicación, tipo de trabajo y habilidades específicas, así como la posibilidad de realizar entrevistas previas o pruebas de confianza antes de acceder a la plataforma."
              }
            />
            <P
              client:only
              text={
                "Para asegurar una experiencia fluida y transparente, ofreceremos un seguimiento detallado del proceso, desde la solicitud inicial hasta la finalización del trabajo. Solo después de completar el trabajo, los usuarios podrán dejar comentarios y calificaciones opcionales, contribuyendo así a una retroalimentación constructiva y significativa."
              }
            />
          </div>
          <div
            className="w-full border-[0.2px] border-gray-600
	  bg-white bg-opacity-5 p-2 rounded-xl"
          >
            <H2
              client:only
              text={
                "6.	Define un nombre o marca para tu idea de negocio para convertirla en un emprendimiento."
              }
            />
            <PnotableTwo client:only text={"Finger Job"} />
          </div>
          <div
            className="bg-white bg-opacity-5 p-2 rounded-xl h-96
	  dark:bg-gradient-to-r bg-gradient-to-r
	  dark:from-purple-900 from-[#1E1C48]
	  dark:via-gray-800 via-gray-800
	  dark:to-[#312152] to-[#312152]
	  blur z-98 relative rounded-tl-[70%] rounded-bl-[70%] rounded-tr-[70%] rounded-br-[70%]"
          ></div>
          <div
            className="w-full border-[0.2px] border-gray-600
	bg-white bg-opacity-5 p-2 rounded-xl"
          >
            <H2
              client:only
              text={
                "7.	Evalúa y analiza el entorno, identifica a los potenciales competidores (por lo menos unos 3, directo, indirecto e ilegal)."
              }
            />
            <Pnotable client:only text={"Directos"} />
            <ul className="ml-5 list-disc list-inside text-zinc-400 font-light text-lg flex flex-col gap-2 mb-2">
              <li className="mb-2">
                {"La bolsita de trabajo, Página de facebook"}
              </li>
              <li className="mb-2">{"Linkedin"}</li>
              <li className="mb-2">{"Facebook market"}</li>
            </ul>
            <Pnotable client:only text={"Indirectos"} />
            <ul className="ml-5 list-disc list-inside text-zinc-400 font-light text-lg flex flex-col gap-2 mb-2">
              <li className="mb-2">{"La bolsita de trabajo, Radio fides"}</li>
            </ul>
            <Pnotable client:only text={"Ilegales"} />
            <p className="ml-5 mb-2 text-red-600">
              {"No se encontraron datos"}
            </p>
          </div>
          <div className="w-full">
            <div
              className="w-full border-[0.2px] border-gray-600
		  bg-white bg-opacity-5 p-2 rounded-xl"
            >
              <H2
                client:only
                text={
                  "8.	Realiza un análisis de las fortalezas, debilidades, oportunidades y amenazas que identifiques en tu idea de negocio como también de los competidores que identifiques."
                }
              />
              <Pnotable client:only text={"Fortalezas"} />
              <ul className="ml-5 list-disc list-inside text-zinc-400 font-light text-lg flex flex-col gap-2 mb-2">
                <li className="mb-2">{"Tecnología adecuada"}</li>
                <li className="mb-2">{"Personal calificado"}</li>
                <li className="mb-2">{"Mejoras constantes"}</li>
              </ul>
              <Pnotable client:only text={"Debilidades"} />
              <ul className="ml-5 list-disc list-inside text-zinc-400 font-light text-lg flex flex-col gap-2 mb-2">
                <li className="mb-2">{"Escasos recursos financieros."}</li>
                <li className="mb-2">
                  {
                    "Pago de servicios a terceros para el funcionamiento de la aplicación (Playstore, Hosting, Actualizaciones)."
                  }
                </li>
                <li className="mb-2">
                  {"Dependencia de servicios (hosting,PlayStore)."}
                </li>
              </ul>
              <Pnotable client:only text={"Oportunidades"} />
              <ul className="ml-5 list-disc list-inside text-zinc-400 font-light text-lg flex flex-col gap-2 mb-2">
                <li className="mb-2">{"Mercado mal atendido."}</li>
                <li className="mb-2">
                  {"Posibilidad de crecer en un nuevo mercado."}
                </li>
                <li className="mb-2">
                  {
                    "Interacción online, no es necesaria la interacción con distribuidores."
                  }
                </li>
              </ul>
              <Pnotable client:only text={"Amenazas"} />
              <ul className="ml-5 list-disc list-inside text-zinc-400 font-light text-lg flex flex-col gap-2 mb-2">
                <li className="mb-2">
                  {
                    "Alta competencia en el mercado de aplicaciones móviles laborales."
                  }
                </li>
                <li className="mb-2">
                  {"Cambio de preferencias de los usuarios."}
                </li>
                <li className="mb-2">
                  {"Riesgos de ciberataques y brechas de seguridad."}
                </li>
              </ul>
            </div>
          </div>
          <div
            className="w-full border-[0.2px] border-gray-600
	  bg-white bg-opacity-5 p-2 rounded-xl"
          >
            <H2
              client:only
              text={
                "9.	Realiza un mapa conceptual de tu idea de negocio, considerando todos los aspectos de la misma."
              }
            />
            <img
              src="https://i.ibb.co/0ZJgMBh/222.png"
              alt="organigrama de roles"
            />
          </div>
          <div
            className="bg-white bg-opacity-5 p-2 rounded-xl h-96
	  dark:bg-gradient-to-r bg-gradient-to-r
	  dark:from-purple-900 from-[#1E1C48]
	  dark:via-gray-800 via-gray-800
	  dark:to-[#312152] to-[#312152]
	  blur z-98 relative rounded-tl-[70%] rounded-bl-[70%] rounded-tr-[70%] rounded-br-[70%]"
          ></div>
          <div
            className="w-full border-[0.2px] border-gray-600
	  bg-white bg-opacity-5 p-2 rounded-xl relative"
          >
            <H1subtitle client:only text={"Tercera parte"} />
            <H2 client:only text={"1. Resumen ejecutivo"} />
            <P
              client:only
              text={
                "Finger Job es una aplicación móvil que redefine el proceso de búsqueda y oferta de empleos, con un enfoque centrado en simplificar y agilizar esta experiencia tanto para empleadores como para trabajadores."
              }
            />
            <PnotableTwo client:only text={"FODA"} />
            <table className="w-full table-auto rounded-lg shadow-md">
              <thead className="text-left bg-blue-500 text-white">
                <tr>
                  <th className="px-4 py-2">Fortalezas</th>
                  <th className="px-4 py-2">Oportunidades</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1 Tecnología adecuada</td>
                  <td className="border px-4 py-2">1 Mercado mal atendido</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2 Personal capacitado.</td>
                  <td className="border px-4 py-2">
                    2 Posibilidad de crecer en un nuevo mercado.
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">3 Mejoras constantes.</td>
                  <td className="border px-4 py-2">
                    3 Interacción online, no es necesaria la interacción de
                    distribuidores.
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full table-auto rounded-lg shadow-md mb-10">
              <thead className="text-left bg-blue-500 text-white">
                <tr>
                  <th className="px-4 py-2">Debilidades</th>
                  <th className="px-4 py-2">Amenazas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">
                    1 Escasos recursos financieros.
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    1 Alta competencia en el mercado de aplicaciones móviles
                    laborales.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">
                    2 Pago de servicios a terceros para el funcionamiento de la
                    aplicación (Playstore, Hosting, Actualizaciones.
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    2 Cambio de preferencias de los usuarios.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">
                    3 Dependencia de servicios (hosting, PlayStore.
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    3 Riesgos de ciberataques y brechas de seguridad.
                  </td>
                </tr>
              </tbody>
            </table>
            <PnotableTwo client:only text={"MODELO CANVAS 'B'"} />
            <img
              className="rounded-lg cursor-pointer mt-2"
              src="https://i.ibb.co/CHxzHjT/dd.png"
              alt={"adawd"}
            />
            <H2
              client:only
              text={"2.	Descripción del emprendimiento / empresa"}
            />
            <P
              client:only
              text={
                "Finger Job es una aplicación móvil que conecta a empleadores y trabajadores de manera rápida y eficiente. Nuestra plataforma permite a los usuarios crear perfiles detallados, comunicarse a través de un sistema de chat integrado y calificar la calidad del trabajo realizado. Con un enfoque en la transparencia y la seguridad, Finger Job ofrece una solución innovadora para la búsqueda y oferta de empleos en el mercado laboral actual."
              }
            />
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-teal-200 font-semibold">
                Misión
              </div>
              <p className="mt-2 text-gray-200">
                Conectar a buscadores de empleo, estudiantes y trabajadores
                independientes mediante una aplicación móvil innovadora.
                Facilitar oportunidades laborales y contratación de servicios
                para reducir el desempleo y fomentar el crecimiento económico
                regional.
              </p>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-teal-200 font-semibold">
                Visión
              </div>
              <p className="mt-2 text-gray-200">
                Convertirnos en la plataforma líder que fomente la inclusión
                laboral y el crecimiento económico. Expandir nuestra aplicación
                a regiones con brechas laborales y considerar la adición de
                nuevos servicios para satisfacer otras necesidades del mercado.
              </p>
            </div>
            <img src="https://i.ibb.co/J7YWpX1/pngwing-com-2.png" alt="img" />
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-teal-200 font-semibold">
                Valores
              </div>
              <p className="mt-2 text-gray-200">
                <span className="text-red-400">Innovación: </span>Nosotros
                estamos comprometidos con la búsqueda constante de soluciones
                creativas y tecnológicas que ayuden a mejorar el rendimiento de
                nuestra aplicación, abordando de esta manera los 17 desafíos del
                mercado laboral y satisfacer las necesidades cambiantes de
                nuestros usuarios.
              </p>
              <p className="mt-2 text-gray-200">
                <span className="text-red-400">Integridad: </span>Actuamos con
                total transparencia, honestidad y ética en todas nuestras
                interacciones que tenemos con nuestros clientes tanto dentro de
                nuestra aplicación como fuera de la misma, manteniendo la
                confianza de nuestros usuarios, colaboradores y socios
                comerciales.
              </p>
              <p className="mt-2 text-gray-200">
                <span className="text-red-400">Inclusión: </span>Nuestra
                aplicación promueve la equidad y la igualdad de oportunidades,
                brindando acceso a nuestra plataforma a todos los buscadores de
                empleo como personas autodidactas, trabajadores independientes,
                pasantes, sin importar su origen, género o su situación
                socioeconómica.
              </p>
              <p className="mt-2 text-gray-200">
                <span className="text-red-400">
                  Compromiso con el Cliente:{" "}
                </span>
                Nos esforzamos por comprender las necesidades y expectativas de
                nuestros usuarios mediante un eficiente servicio al cliente, de
                esta manera les brindamos una atención de calidad que mejore su
                experiencia en cuanto a otras apps que haya usado o conocido.
              </p>
              <p className="mt-2 text-gray-200">
                <span className="text-red-400">Colaboración: </span>
                Nuestra empresa fomenta un entorno de trabajo colaborativo,
                donde el intercambio de ideas y el trabajo en equipo son cosas
                fundamentales para lograr alcanzar nuestros objetivos que nos
                hemos planteados y la buena experiencia de nuestros usuarios con
                la aplicación.
              </p>
            </div>
            <H2 client:only text={"3.	Análisis de mercado"} />
            <P
              client:only
              text={
                "El mercado laboral es un sector en crecimiento que carece de una plataforma centralizada para la búsqueda y oferta de empleos. Con la proliferación de la tecnología móvil, existe una oportunidad única para desarrollar una aplicación que satisfaga esta necesidad no atendida. Finger Job se posiciona como una solución innovadora y eficiente para conectar a empleadores y trabajadores en un entorno seguro y transparente."
              }
            />
            <div className="p-6 rounded-lg">
              <h2 className="uppercase tracking-wide text-sm text-teal-200 font-semibold">
                Competencia Local:
              </h2>
              <p className="mb-4">
                La competencia local en el mercado laboral de Tarija es
                limitada, con pocos servicios especializados en la búsqueda y
                oferta de empleos. La mayoría de las ofertas de trabajo se
                realizan a través de redes sociales, grupos de WhatsApp y
                anuncios en línea, lo que dificulta la centralización y la
                eficiencia del proceso.
              </p>

              <h2 className="uppercase tracking-wide text-sm text-teal-200 font-semibold">
                Demanda de Empleo y Oferta Laboral:
              </h2>
              <p className="mb-4">
                Aunque los datos del Instituto Nacional de Estadística (INE), a
                través de la Encuesta Continua de Empleo (ECE) la cual
                proporciona información estadística trimestral y mensual, sobre
                el comportamiento de la desocupación, la oferta y la movilidad
                de trabajo en el ámbito urbano y rural, señalan que la tasa de
                desempleo en Tarija ronda el 8%. Profesionales y empresarios
                privados de Tarija discrepan con estos datos, estos últimos en
                entrevistas pasadas señalaron que la desocupación supera el 30%.
              </p>

              <h2 className="uppercase tracking-wide text-sm text-teal-200 font-semibold">
                Perfil del Usuario Objetivo:
              </h2>
              <p className="mb-4">
                Nuestro usuario objetivo es un trabajador profesional o técnico
                que busca oportunidades laborales en Tarija. Este usuario puede
                ser un estudiante, un profesional autodidacta o un trabajador
                independiente que busca empleo a tiempo parcial o completo.
                Nuestra aplicación está diseñada para satisfacer las necesidades
                de este usuario, proporcionando una plataforma segura y
                eficiente para la búsqueda y oferta de empleos.
              </p>
            </div>

            <H2
              client:only
              text={"4.	Detalles del producto servicio del emprendimiento"}
            />
            <P
              client:only
              text={
                "Finger Job es una aplicación móvil que permite a los usuarios crear perfiles detallados, comunicarse a través de un sistema de chat integrado y calificar la calidad del trabajo realizado. Con un enfoque en la transparencia y la seguridad, Finger Job ofrece una solución innovadora para la búsqueda y oferta de empleos en el mercado laboral actual."
              }
            />
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-white">
                Descripción General
              </h2>
              <p className="text-zinc-400">
                Finger Job es una aplicación móvil que revoluciona la forma en
                que las personas buscan y ofrecen empleo en el mercado laboral
                actual. Con un enfoque en la transparencia y la seguridad,
                Finger Job ofrece una solución innovadora para conectar a
                empleadores y trabajadores.
              </p>
            </div>
            <div className="w-full flex flex-col mb-8">
              <h2 className="text-2xl font-bold mb-2 text-white">
                Características Principales
              </h2>
              <div className="flex flex-cols justify-between">
                <ul className="list-disc grid gap-5 grid-cols-4  list-inside text-zinc-400">
                  <li className="text-white h-max">
                    Landing Page de Inicio
                    <img
                      className="w-full rounded-xl h-[30%]"
                      src="https://i.ibb.co/Q6BZBL1/PageInit.jpg"
                      alt="imagen-init"
                    />
                  </li>
                  <li className="text-white h-max">
                    Pantalla de login
                    <img
                      className="w-full rounded-xl h-[30%]"
                      src="https://i.ibb.co/5j0vqnn/Login-Init.jpg"
                      alt="imagen-login"
                    />
                  </li>
                  <li className="text-white h-max">
                    Pasos para registro
                    <img
                      className="w-full rounded-xl h-[30%]"
                      src="https://i.ibb.co/PCc8dy6/Register-Eleccion.jpg"
                      alt="imagen-register-eleccion"
                    />
                  </li>
                  <li className="text-white h-max">
                    Formulario de registro
                    <img
                      className="w-full rounded-xl h-[30%]"
                      src="https://i.ibb.co/WpBP57z/Register-Form.jpg"
                      alt="imagen-form"
                    />
                  </li>
                  <li className="text-white h-max">
                    Filtros y busquedas
                    <img
                      className="w-full rounded-xl h-[30%]"
                      src="https://i.ibb.co/FHDCLY4/Filtro-YBusqueda.jpg"
                      alt="imagen-filtro-busqueda"
                    />
                  </li>
                  <li className="text-white h-max">
                    Elección de especialidad
                    <img
                      className="w-full rounded-xl h-[30%]"
                      src="https://i.ibb.co/6WzcQdG/Eleccion-Trabajador.jpg"
                      alt="imagen-eleccion-especialidad"
                    />
                    a
                  </li>
                  <li className="text-white h-max">
                    Chat integrado
                    <img
                      className="w-full rounded-xl h-[30%]"
                      src="https://i.ibb.co/x535ML6/Chat-Integrado.jpg"
                      alt="imagen-eleccion-especialidad"
                    />
                    a
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-white font-light">
                Beneficios para los Usuarios
              </h2>
              <ul className="list-disc list-inside text-zinc-400">
                <li>Agiliza y simplifica el proceso de búsqueda de trabajo</li>
                <li>
                  Proporciona transparencia y seguridad en las transacciones
                  laborales
                </li>
                <li>
                  Facilita la comunicación entre empleadores y trabajadores
                </li>
                <li>
                  Ofrece una manera objetiva de evaluar la calidad del trabajo
                </li>
                <li>
                  Permite a los usuarios encontrar trabajos que se ajusten a sus
                  habilidades y necesidades
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-white font-light">
                Ventajas Competitivas
              </h2>
              <p className="text-zinc-400">
                Finger Job se destaca de otras plataformas de búsqueda de empleo
                gracias a su enfoque en la seguridad, la transparencia y la
                experiencia del usuario. Además, la integración de
                características únicas, como la entrevista previa y el sistema
                de calificación por estrellas, proporciona un valor añadido a
                los usuarios.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-white font-light">
                Monetización
              </h2>
              <p className="text-zinc-400">
                Finger Job ofrece dos tipos de cuentas: estándar y premium. Las
                cuentas premium disfrutan de funciones adicionales y un alcance
                ampliado, lo que proporciona una fuente adicional de ingresos
                para la plataforma.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-white font-light">
                Consideraciones Legales y Éticas
              </h2>
              <p className="text-zinc-400">
                Finger Job se compromete a cumplir con todas las regulaciones
                legales y éticas relacionadas con la privacidad de los datos de
                los usuarios, la no discriminación y el cumplimiento de las
                regulaciones laborales.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-white font-light">
                Feedback y Mejoras Futuras
              </h2>
              <p className="text-zinc-400">
                Finger Job está constantemente buscando feedback de los usuarios
                para mejorar su plataforma. Se recopilan comentarios a través de
                encuestas periódicas, seguimiento de métricas clave de
                rendimiento y la implementación de nuevas características
                basadas en las necesidades y deseos de los usuarios.
              </p>
            </div>
            <H2
              client:only
              text={"5.	Plan de operaciones y gestión del emprendimiento"}
            />
            <P
              client:only
              text={
                "Finger Job se basa en un modelo de negocio centrado en la tecnología y la innovación. Nuestro equipo está compuesto por profesionales altamente calificados en el desarrollo de aplicaciones móviles y la gestión de proyectos. Con un enfoque en la transparencia y la eficiencia, Finger Job se esfuerza por ofrecer una experiencia de usuario excepcional y un servicio de alta calidad a todos los usuarios."
              }
            />
            <H2 client:only text={"6.	Plan de marketing y ventas"} />
            <P
              client:only
              text={
                "Finger Job se promocionará a través de campañas de marketing digital en redes sociales, blogs y sitios web relevantes. Nuestro objetivo es llegar a una amplia audiencia de empleadores y trabajadores técnicos o profesionales, destacando los beneficios y características únicas de nuestra aplicación. Además, estableceremos alianzas estratégicas con empresas y organizaciones locales para promover Finger Job como una solución innovadora para la búsqueda y oferta de empleos en el mercado laboral actual."
              }
            />
            <H2 client:only text={"7.	anexos"} />
            <P client:only text={"- Mapa conceptual de la idea de negocio."} />
          </div>
        </section>
      </div>
    </>
  );
};
