class Helpers {

    public done(output: any) {

        process.stdout.write(output);

        process.stdout.write('\nprompt > ');

    }

}

export default Helpers;