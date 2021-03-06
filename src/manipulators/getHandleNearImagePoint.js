import * as cornerstone from 'cornerstone-core';
import * as cornerstoneMath from 'cornerstone-math';
import pointInsideBoundingBox from '../util/pointInsideBoundingBox';

export default function (element, handles, coords, distanceThreshold) {
  let nearbyHandle;

  if (!handles) {
    return;
  }

  Object.keys(handles).forEach(function (name) {
    const handle = handles[name];

    if (handle.hasOwnProperty('pointNearHandle')) {
      if (handle.pointNearHandle(element, handle, coords)) {
        nearbyHandle = handle;

        return;
      }
    } else if (handle.hasBoundingBox === true) {
      if (pointInsideBoundingBox(handle, coords)) {
        nearbyHandle = handle;

        return;
      }
    } else {
      const handleCanvas = cornerstone.pixelToCanvas(element, handle);
      const distance = cornerstoneMath.point.distance(handleCanvas, coords);

      if (distance <= distanceThreshold) {
        nearbyHandle = handle;

        return;
      }
    }
  });

  return nearbyHandle;
}
