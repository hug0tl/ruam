export interface Chofer {
        id: string;
        nombre: string;
        fechaNacimiento: string;
        tipo: "URVAN" | "RTP" | "Micro";
        fotoPerfil?: string;   // Assuming these are the only possible types
      }