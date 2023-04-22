const phoneNumber = '77474980242'
const whatsappLink = 'https://wa.me/' + phoneNumber + '?text='

const detailsOfProductMessage ='Здравствуйте, хочу узнать больше о продукте {NAME} из категории: {PARENT}'

export const writeToWhatsappName = 'Написать в WhatsApp'

export function buildDetailsOfProductMessageHref(item) {
  let messageText = detailsOfProductMessage
    .replace('{NAME}', item.title)
    .replace('{PARENT}', item.parent)
  return whatsappLink.concat(messageText)
}
