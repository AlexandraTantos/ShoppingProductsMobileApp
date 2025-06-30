import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants";
import { Review } from "../screens/ProductsScreen";
import CloseModalButton from "./CloseModalButton";

type Props = {
  visible: boolean;
  onClose: () => void;
  reviews: Review[];
};

const ReviewsModal = ({ visible, onClose, reviews }: Props) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Reviews</Text>
          {reviews.length === 0 ? (
            <Text style={styles.modalText}>No reviews yet.</Text>
          ) : (
            reviews.map((review, index) => (
              <View key={index} style={styles.reviewItem}>
                <Text style={styles.reviewerName}>{review.reviewerName}</Text>
                <Text style={styles.reviewRating}>
                  Rating: {review.rating}/5
                </Text>
                <Text style={styles.reviewComment}>"{review.comment}"</Text>
                <Text style={styles.reviewDate}>
                  {new Date(review.date).toLocaleDateString()}
                </Text>
              </View>
            ))
          )}
          <CloseModalButton onPress={onClose} text="Close" />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    width: "85%",
    maxHeight: "70%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    color: COLORS.black,
  },
  closeButton: {
    marginTop: 5,
    backgroundColor: COLORS.black,
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  reviewItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayLight,
    paddingBottom: 10,
  },
  reviewerName: {
    fontWeight: "bold",
    fontSize: 16,
    color: COLORS.black,
  },
  reviewRating: {
    color: "orange",
    fontWeight: "600",
  },
  reviewComment: {
    fontStyle: "italic",
    color: COLORS.graySecondary,
  },
  reviewDate: {
    fontSize: 12,
    color: COLORS.graySecondary,
    marginTop: 4,
  },
});

export default ReviewsModal;
