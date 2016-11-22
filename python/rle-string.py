def rleString(string):
    rleOutput = ''

    currentChar = string[0]
    count = 0

    for char in string:
        if char == currentChar:
            count += 1
        else:
            rleOutput += currentChar + str(count)
            currentChar = char

    rleOutput += currentChar + str(count)

    return rleOutput


print(rleString('aaabbcccccdd'));