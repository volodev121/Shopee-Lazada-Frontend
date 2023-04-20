
/**
 * Password validator for login pages
 */

// has number
const hasNumber = (number: string) => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
const hasMixed = (number: string) => new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// has special chars
const hasSpecial = (number: string) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

interface StrengthColor {
    label: string;
    color: string;
}

// set color based on password strength
export const strengthColor = (count: number): StrengthColor => {
    if (count < 2)
        return { label: 'Poor', color: "rgb(244, 67, 54)" };
    if (count < 3)
        return { label: 'Weak', color: "rgb(255, 193, 7)" };
    if (count < 4)
        return { label: 'Normal', color: "rgb(255, 171, 145)" };
    if (count < 5)
        return { label: 'Good', color: "rgb(0, 230, 118)" };
    if (count < 6)
        return { label: 'Strong', color: "rgb(0, 200, 83)" };
    return { label: 'Poor', color: "rgb(244, 67, 54)" };
};

// password strength indicator
export const strengthIndicator = (number: string): number => {
    let strengths = 0;
    if (number.length > 5) strengths += 1;
    if (number.length > 7) strengths += 1;
    if (hasNumber(number)) strengths += 1;
    if (hasSpecial(number)) strengths += 1;
    if (hasMixed(number)) strengths += 1;
    return strengths;
};