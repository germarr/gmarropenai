import type {
  ActionFunction,
  LoaderFunction,
  V2_MetaFunction,
  json,
} from "@remix-run/node";
import {
  Form,
  Link,
  useActionData,
  useFormAction,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import Menubar from "~/components/Menubar";
import Send from "~/components/Send";

const Mapstr = (mapstr: string) => {
  return (
    <iframe
      src={mapstr}
      width="300"
      height="225"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
    ></iframe>
  );
};

type ResponseData = {
  Answer: string;
  party: string;
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Steph & Ger Wedding!" },
    {
      name: "description",
      content:
        "This site is entireley dedicated to talk about Steph and Ger's Wedding.",
    },
  ];
};

// export let loader: LoaderFunction = async ({ request }) => {
//   let response = await fetch(
//     "http://localhost:8888/openai?question=Tell%20me%20a%20joke",
//     {
//       headers: {
//         "User-Agent": "Remix",
//       },
//     }
//   );

//   // check if response is ok
//   if (!response.ok) {
//     throw new Error(
//       `Failed to fetch data from the local server with status ${response.status}`
//     );
//   }

//   let data = await response.json();

//   return data;
// };

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let values = Object.fromEntries(formData);
  console.log(values);

  let response = await fetch(
    `https://gmarropenai.azurewebsites.net/openai?question=${values["name"]}`
  );

  // check if response is ok
  if (!response.ok) {
    throw new Error(
      `Failed to fetch data from the local server with status ${response.status}`
    );
  }

  let data: ResponseData = await response.json();
  console.log("💀", data);

  return data;
};

export default function Ai() {
  // const { Answer } = useLoaderData();
  const data = useActionData<typeof action>();
  let navigation = useNavigation();

  console.log("🤼", navigation.state);

  return (
    <div>
      <Menubar />
      <div className="flex place-content-center py-6 md:py-11">
        <h1 className="text-center text-2xl md:text-4xl font-bold">
          Boda Steph y Ger{" "}
          <span className="bg-yellow-100 rounded-full p-2 md:p-3">💍</span>
        </h1>
      </div>
      <div className="flex place-items-center px-5">
        {" "}
        <div className="grid sm:grid-cols-1 md:grid-cols-4 px-6 gap-x-3 gap-y-6  md:gap-y-3">
          <div className="md:col-span-1">
            {" "}
            <p className="text-left">
              Gerardo es un ñoñazo de primera entonces decidio crear esta
              seccion para que puedas hablar con un chatbot con Inteligencia
              Artificial a la cual le podras hacer preguntas de los novios o del
              evento general.
            </p>
          </div>
          <div className="md:col-span-3 bg-gray-800 rounded-md">
            <div className="flex flex-col-reverse">
              <div className="flex items-center">
                <Form className="w-full px-3 pb-3" method="post">
                  <Send />
                  <input
                    id="4567"
                    name="formNum"
                    type="hidden"
                    value="testinghidden"
                  />
                </Form>
              </div>
              <div className="shadow-sm p-7">
                <p className="text-white text-left text-lg font-base">
                  {data ? data.Answer : ""}
                </p>
                <div className="mt-5">
                  {navigation.state === "submitting" ? (
                    <div className="flex justify-center items-center">
                      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
                    </div>
                  ) : data && data.party.word === true ? (
                    <iframe
                      src={data.party.address}
                      width="300"
                      height="225"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                    ></iframe>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
