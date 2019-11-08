class Helpers {

    public constructor(){}

    public evalCmd(userInput: string): string {
        
        let userCmd = userInput.split(" ")[0];

        return this.capitalize(userCmd);

    }

    public done(output: any): void {

        process.stdout.write(output);

        process.stdout.write('\nprompt > ');

    }

    private capitalize(str): string {
        
        return str.charAt(0).toUpperCase() + str.slice(1);

    }

}

export default Helpers;