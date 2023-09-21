import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => {
  
    //ToDo: TAREA hacer las pruebas
    // Lo unico que quedaria por probar es la funcionalidad de onAddCategory
    // snapshot? misma categoria dos veces? etc...
    test('should ', () => {
      
        render(<GifExpertApp />);
        screen.debug();
    })
    
})
