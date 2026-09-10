const serverImage = ((): string => {
  const image =
    process.env.TROGON_EVENTSTORE_IMAGE ??
    "ghcr.io/trogonstack/trogoneventstore:ci";

  return image;
})();

export const dockerImages = {
  volumesProvisioner: "hasnat/volumes-provisioner",
  certGen: "docker.eventstore.com/eventstore-utils/es-gencert-cli:latest",
  server: serverImage,
};
