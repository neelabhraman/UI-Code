import {render,screen} from '@testing-library/react';
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting Component',()=>{
    test("renders Hello World as text",()=>{

        //Arrange
        render(<Greeting/>);
        //Act
        //..nothing here

        //Assert
        const domVal=screen.getByText('Hello World!',{exact:true});
        expect( domVal).toBeInTheDocument();
    });
    test("renders 'good to see you' if the button is NOT clicked",()=>{

        //Arrange
        render(<Greeting/>);
        //Act
        //..nothing here

        //Assert
        const domVal=screen.getByText('It\'s good to see you!',{exact:true});
        expect( domVal).toBeInTheDocument();
    });
    test("renders 'changed' if the button IS clicked",()=>{

        //Arrange
        render(<Greeting/>);

        //Act
        //clicked the button
        const buttonEle=screen.getByRole('button');
        userEvent.click(buttonEle);

        //Assert
        const domVal=screen.getByText('Changed!',{exact:true});
        expect( domVal).toBeInTheDocument();
    });

    test("checks if the text 'good to see you' is not visible if the button IS clicked",()=> {
        //Arrange
        render(<Greeting></Greeting>);

        //Act
        const btnEle=screen.getByRole('button');
        userEvent.click(btnEle);

        //Assert
        const domVal=screen.queryByText("It's good to see you!",{exact:true});
        //expect(domVal).not.toBeInTheDocument();
        expect(domVal).toBeNull();
    });
});
