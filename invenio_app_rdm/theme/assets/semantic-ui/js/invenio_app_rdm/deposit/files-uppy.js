// This file is part of InvenioRDM
// Copyright (C) 2020-2024 CERN.
// Copyright (C) 2020-2025 CESNET.
// Copyright (C) 2020-2022 Northwestern University.
// Copyright (C) 2022-2024 KTH Royal Institute of Technology.
//
// Invenio App RDM is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more

import { getInputFromDOM } from '@js/invenio_rdm_records';
import { UppyDepositFileApiClient, UppyDepositFilesService, UppyUploader } from '@inveniosoftware/invenio-files-uppy';

const {apiHeaders, default_transfer_type: defaultTransferType, fileUploadConcurrency} = getInputFromDOM("deposits-config");

if (window.invenio) {
  const rdmFilesApiClient = new UppyDepositFileApiClient({ apiHeaders }, defaultTransferType);
  const rdmFilesService = new UppyDepositFilesService(rdmFilesApiClient, fileUploadConcurrency);

  window.invenio.files = {
    apiClient: rdmFilesApiClient,
    service: rdmFilesService,
    uploaderComponent: UppyUploader,
  };
}
