/*
    Given a string only containing round brackets '('and')' and lowercase characters,
    remove the least amount of brackets so the string is valid.
    A string is considered valid if it is empty or if there are brackets, they all close.
    Example :
    - a)bc(d) = abc(d)
    - (ab(c)a = ab(c)a or (abc)a
    - ))(( = empty string

    Step 1 : Verify the constraints
    - What do we return from our algorithm ? Return a valid string with the fewest brackets removed.
    - Will there be spaces in the string ? No, the string only contains lowercase characters, '('and')'
    - Is a string containing only lowercase characters valid ? Yes, you don't need any brackets for a string to be valid.

    Step 2 : Write out some test cases
    - "a)bc(d)" => return abc(d)
    - "(ab(c)d" => return (abc)d or ab(c)d
    - "))((" => return ""

    Step 4 : Write out our solution in code
    checking Solution file

 */