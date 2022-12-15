docker build \
-t kraikub/kraikub-id:latest \
--build-arg NEXT_PUBLIC_KRAIKUB_CLIENT_ID_ARG=7267700f83a8066dd55505a9512e2073 \
--build-arg MONGODB_URL_ARG=mongodb://admin:123456@localhost:27017/kraikub \
--no-cache .