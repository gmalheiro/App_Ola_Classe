// import React from "react";
// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import assets from "../../../constants/assets.js";
// import { IconComment, IconLike, IconWarning } from "../components/IconsCard";

// const Profiles = ({ navigation }) => {
//   <>
//     <AshProfile navigation={navigation} />
//     <GuanabaraProfile navigation={navigation} />
//     <DeschampsProfile navigation={navigation} />
//     <JordanProfile />
//   </>;
// };

// const AshProfile = ({ navigation }) => {
//   return (
//     <View style={styles.center}>
//       <View style={[styles.card, styles.elevation, styles.center]}>
//         <View style={styles.center}>
//           <TouchableOpacity onPress={() => navigation.navigate("profileAsh")}>
//             <View
//               style={{
//                 flexDirection: "row",
//                 paddingBottom: 8,
//                 marginRight: 220,
//               }}
//             >
//               <Image
//                 style={{
//                   width: 40,
//                   height: 40,
//                   marginRight: 235,
//                   marginTop: -8,
//                 }}
//                 source={assets.imgAsh}
//               />
//               <Text
//                 style={{
//                   marginLeft: -225,
//                   fontWeight: "600",
//                   fontSize: 16,
//                 }}
//               >
//                 Ash
//               </Text>
//             </View>
//           </TouchableOpacity>
//           <Image
//             source={assets.postMeme}
//             style={{ width: 300, height: 175, borderRadius: 10 }}
//           />
//         </View>

//         <View
//           style={{
//             flexDirection: "row",
//             marginRight: 240,
//             marginTop: -49,
//           }}
//         >
//           <IconLike />
//           <IconWarning />
//           <IconComment />
//         </View>
//       </View>
//     </View>
//   );
// };

// const GuanabaraProfile = ({ navigation }) => {
//   return (
//     <View
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 10,
//       }}
//     >
//       <View style={[styles.card, styles.elevation, styles.center]}>
//         <View style={styles.center}>
//           <TouchableOpacity
//             onPress={() => navigation.navigate("profileCursoemVideo")}
//           >
//             <View
//               style={{
//                 flexDirection: "row",
//                 paddingBottom: 2,
//                 paddingTop: 5,
//                 marginRight: 140,
//               }}
//             >
//               <Image
//                 style={{
//                   width: 40,
//                   height: 40,
//                   marginRight: 235,
//                   marginTop: -8,
//                 }}
//                 source={assets.ImgCursoEmVideo}
//               />
//               <Text
//                 style={{
//                   marginLeft: -225,
//                   fontWeight: "600",
//                   fontSize: 16,
//                 }}
//               >
//                 Curso em Video
//               </Text>
//             </View>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => navigation.navigate("OpenVideoGuanabara")}
//           >
//             <Image
//               source={assets.TumbnailGuanabara}
//               style={{ width: 300, height: 175, borderRadius: 10 }}
//             />
//           </TouchableOpacity>
//           <View style={{ paddingTop: 5 }}>
//             <Text
//               style={{
//                 fontWeight: "700",
//                 fontSize: 16,
//               }}
//             >
//               Curso Pyhton #01 - Seja Programador
//             </Text>
//           </View>
//         </View>

//         <View
//           style={{
//             flexDirection: "row",
//             paddingTop: 10,
//             marginRight: 240,
//             marginTop: -49,
//           }}
//         >
//           <IconLike />
//           <IconWarning />
//           <IconComment />
//           {/* <IconSave /> */}
//         </View>
//       </View>
//     </View>
//   );
// };

// const DeschampsProfile = ({ navigation }) => {
//   return (
//     <View
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 18,
//       }}
//     >
//       <View style={[styles.card, styles.elevation, styles.center]}>
//         <View style={styles.center}>
//           <View
//             style={{
//               flexDirection: "row",
//               paddingBottom: 8,
//               marginRight: 110,
//             }}
//           >
//             <Image
//               style={{
//                 width: 40,
//                 height: 40,
//                 marginRight: 235,
//                 marginTop: -8,
//                 borderRadius: 50,
//               }}
//               source={assets.imgDechamps}
//             />
//             <Text
//               style={{
//                 marginLeft: -225,
//                 fontWeight: "600",
//                 fontSize: 16,
//               }}
//             >
//               Filipe Deschamps
//             </Text>
//           </View>

//           <TouchableOpacity
//             onPress={() => navigation.navigate("OpenVideoDechamps")}
//           >
//             <Image
//               source={assets.tumbnailDechamps}
//               style={{ width: 300, height: 175, borderRadius: 10 }}
//             />
//           </TouchableOpacity>
//           <View style={{ paddingTop: 2 }}>
//             <Text
//               style={{
//                 fontWeight: "700",
//                 fontSize: 16,
//               }}
//             >
//               Um dos conceitos mais importantes...
//             </Text>
//           </View>
//         </View>

//         <View
//           style={{
//             flexDirection: "row",
//             paddingTop: 10,
//             marginRight: 240,
//             marginTop: -49,
//           }}
//         >
//           <IconLike />
//           <IconWarning />
//           <IconComment />
//         </View>
//       </View>
//     </View>
//   );
// };

// const JordanProfile = () => {
//   return (
//     <View
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 10,
//       }}
//     >
//       <View style={[styles.card, styles.elevation, styles.center]}>
//         <View style={styles.center}>
//           <View
//             style={{
//               flexDirection: "row",
//               paddingBottom: 8,
//               marginRight: 185,
//             }}
//           >
//             <Image
//               style={{
//                 width: 40,
//                 height: 40,
//                 marginRight: 235,
//                 marginTop: -8,
//               }}
//               source={assets.imgJordan}
//             />
//             <Text
//               style={{
//                 marginLeft: -225,
//                 fontWeight: "600",
//                 fontSize: 16,
//               }}
//             >
//               Jordan
//             </Text>
//           </View>
//           <Image
//             source={assets.memeCebola}
//             style={{ width: 300, height: 175, borderRadius: 10 }}
//           />
//         </View>
//         <View
//           style={{
//             flexDirection: "row",
//             marginRight: 240,
//             marginTop: -49,
//           }}
//         >
//           <IconLike />
//           <IconWarning />
//           {/* <IconSave /> */}
//           <IconComment />
//         </View>
//         <View></View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "white",
//     borderRadius: 8,
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     width: "95%",
//     marginVertical: 5,
//   },
//   elevation: {
//     elevation: 20,
//     shadowColor: "#52006A",
//   },
//   center: {
//     alignItems: "center",
//     justifyContent: "center",
//     height: 290,
//   },
// });

// export default Profiles;
