import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

// Retorna `false` durante o SSR e no primeiro render do cliente, e `true`
// após a hidratação. Útil para adiar UI que depende de estado só conhecido
// no cliente (ex.: tema), evitando mismatch de hidratação — sem precisar de
// setState dentro de useEffect.
export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
