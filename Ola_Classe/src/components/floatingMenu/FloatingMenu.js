import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import assets from "../../../constants/assets.js";

const FloatingMenu = () => {
  return (
    <>
      <AmigosMenuItem />
      <CategoryMenuItem />
      <TermsOfUseMenuItem />
      <AccountSettingsMenuItem />
    </>
  );
};

const AmigosMenuItem = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("FriendsMenu")}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 3,
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: -42,
        }}
      >
        <Image
          source={assets.iconFriends}
          style={{
            width: 35,
            height: 35,
          }}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            paddingLeft: 15,
          }}
        >
          Amigos
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const CategoryMenuItem = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("CategoryMenu")}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={assets.iconCategory}
          style={{
            width: 35,
            height: 35,
          }}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            paddingLeft: 15,
          }}
        >
          Categoria
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const TermsOfUseMenuItem = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("TermsUseMenu")}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={assets.iconTermsUse}
          style={{
            width: 35,
            height: 35,
          }}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            paddingLeft: 15,
          }}
        >
          Termos de Uso
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const AccountSettingsMenuItem = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AccountSettingsMenu")}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={assets.iconConfig}
          style={{
            width: 35,
            height: 35,
          }}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            paddingLeft: 15,
          }}
        >
          Configuração
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FloatingMenu;
