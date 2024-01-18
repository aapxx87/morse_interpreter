const text_input = document.querySelector('.textarea_input_text')
const morse_output_area = document.querySelector('.morse_container')

const btn_convert = document.querySelector('.btn_convert_to_morse')



// const string = 'my name is tolik'







const convert_string_to_array = function (string) {

  const string_toLowerCase = string.toLowerCase()

  const string_array = [...string_toLowerCase]

  return string_array

}





const convert_letter_to_morse = function (string_array) {

  const morse_array = []

  for (const item of string_array) {

    const morse_letter = morse_code_cyrillic_alphabet[item]

    if (morse_letter === undefined) {
      morse_array.push('/')
    } else {
      morse_array.push(morse_letter)
    }

  }

  console.log(morse_array);

  return morse_array.join(' ')

}



btn_convert.addEventListener('click', function () {

  const string_to_convert = text_input.value

  const morse_output = convert_letter_to_morse(convert_string_to_array(string_to_convert))

  morse_output_area.textContent = morse_output

})







