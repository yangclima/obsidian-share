# 🧪 Teste de Integração MDX

Este arquivo serve para testar se os plugins de **Remark** e **Rehype** estão configurados corretamente no seu projeto Next.js.

---

## 1. WikiLinks (Obsidian Style)

- **Link Relativo:** [[test]]
  > (Se você estiver em `/calculo3`, o clique deve levar para `/calculo3/test`)
- **Link com Alias:** [[test|Clique aqui para ir ao teste]]

---

## 2. Matemática (LaTeX)

Para que os símbolos abaixo apareçam corretamente, você deve ter o `remark-math`, `rehype-katex` e o arquivo CSS do KaTeX importado no seu layout.

**Fórmula Inline:** A identidade de Euler é $e^{i\pi} + 1 = 0$.

**Bloco de Equação:**

$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

$$
\mathcal{L}\{f(t)\} = \int_{0}^{\infty} e^{-st} f(t) \,dt
$$

---

## 3. Tabelas (GFM)

| ID  | Matéria     | Professor  | Carga Horária |
| :-- | :---------- | :--------- | :------------ |
| 01  | Cálculo III | Dr. Newton | 60h           |
| 02  | Física II   | Dra. Curie | 45h           |
| 03  | Álgebra     | Sr. Gauss  | 30h           |

---

## 4. Blocos de Código

```javascript
import { useEffect } from "react";

export default function MyComponent() {
  useEffect(() => {
    console.log("MDX com Syntax Highlighting funcionando!");
  }, []);

  return <h1>Sucesso!</h1>;
}
```
