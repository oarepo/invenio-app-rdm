// This file is part of InvenioRDM
// Copyright (C) 2020-2024 CERN.
// Copyright (C) 2020-2025 CESNET.
// Copyright (C) 2020-2022 Northwestern University.
// Copyright (C) 2022-2024 KTH Royal Institute of Technology.
//
// Invenio App RDM is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more

import { getInputFromDOM, RDMDepositFileApiClient, RDMDepositFilesService } from '@js/invenio_rdm_records';

const {apiHeaders, default_transfer_type: defaultTransferType, fileUploadConcurrency} = getInputFromDOM("deposits-config");

if (window.invenio) {
  const rdmFilesApiClient = new RDMDepositFileApiClient({apiHeaders, default_transfer_type: defaultTransferType});
  const rdmFilesService = new RDMDepositFilesService(rdmFilesApiClient, fileUploadConcurrency);

  window.invenio.files = {
    apiClient: rdmFilesApiClient,
    service: rdmFilesService,
  };
}
