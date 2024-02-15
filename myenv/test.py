import pytest
import numpy as np

def test_detect_blur():
    img = np.zeros((100, 100, 3), dtype=np.uint8)
    blurred_img = cv2.GaussianBlur(img, (5, 5), 0)
    assert detect_blur(blurred_img) == True
    assert detect_blur(img) == False

