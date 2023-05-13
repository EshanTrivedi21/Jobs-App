import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btn(item, activeTab)}
            onPress={() => {
              setActiveTab(item)
            }}
          >
            <Text style={styles.btnText(item,activeTab)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Tabs