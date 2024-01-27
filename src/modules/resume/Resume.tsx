import React from 'react'
import ReactPDF, { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import Font = ReactPDF.Font
import font from '../../fonts/Jost/static/Jost-Regular.ttf'

Font.register({
  family: 'Jost',
  src: font,
})

// Создайте стили для PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    width: '100%',
    height: '100%',
    fontFamily: 'Jost',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    width: '100%',
    height: '100%',
  },
})

// Создайте компонент для отображения и загрузки PDF
const MyDocument = () => (
  <Document style={{ width: '100%' }}>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Привет, this PDF!</Text>
      </View>
    </Page>
  </Document>
)

const Resume: React.FC = () => {
  return (
    <PDFViewer style={{ width: '100%' }}>
      <MyDocument />
    </PDFViewer>
  )
}

export default Resume
