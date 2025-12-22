export class ErrorUtils {
    static catchIfThrowedErrorIn(condition: Function): boolean {
        try {
            condition();
        } catch (error) {
            alert(error);
            return true;
        }
        return false;
    }
}
