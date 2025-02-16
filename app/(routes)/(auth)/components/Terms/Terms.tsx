"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Terms() {
  const [showExtraTerms, setShowExtraTerms] = useState(false);

  return (
    <div className="text-xs mt-4 mb-10 text-gray-600 max-w-72">
      <div className="mb-5">
        <span>
          Esta pagina utiliza google reCAPTCHA para verificar que no eres un bot
        </span>
        <Button
          variant="ghost"
          onClick={() => setShowExtraTerms(!showExtraTerms)}
          className="opacity-1 text-[#0071eb] hover:bg-transparent p-0 ml-1 h-fit"
        >
          Mas informacion
        </Button>
      </div>
      <div className="h-28 ">
        {showExtraTerms && (
          <p>
            La informacion recopilada por Google reCAPTCHA esta sujeta a la
            Politica de privacidad y las Condiciones de servicio de Google, y se
            utiliza para proporcionar, mantener y mejorar el servicio de
            reCAPTCHA, asi como para fines generales de seguridad (Google
            utiliza para publicidad personalizada).
          </p>
        )}
      </div>
    </div>
  );
}
